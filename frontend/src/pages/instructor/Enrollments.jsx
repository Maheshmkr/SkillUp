import React, { useState } from 'react';
import { InstructorLayout } from "@/layouts/InstructorLayout";
import { Search, Download, Mail, Loader2, User } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import { getInstructorEnrollments } from '@/api/courseApi';
import { formatDistanceToNow } from 'date-fns';

export default function Enrollments() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('All Courses');

    const { data: enrollments, isLoading, error } = useQuery({
        queryKey: ['instructor-enrollments'],
        queryFn: getInstructorEnrollments
    });

    // Derive unique courses for the filter dropdown
    const uniqueCourses = ['All Courses', ...new Set(enrollments?.map(e => e.course) || [])];

    const filteredEnrollments = enrollments?.filter(student => {
        const matchesSearch = 
            student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            student.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCourse = selectedCourse === 'All Courses' || student.course === selectedCourse;
        return matchesSearch && matchesCourse;
    }) || [];

    const getStatusColor = (status) => {
        switch (status) {
            case "Completed": return "bg-green-500/10 text-green-500 border-green-200/20";
            case "Active": return "bg-blue-500/10 text-blue-500 border-blue-200/20";
            case "Not Started": return "bg-gray-500/10 text-gray-500 border-gray-200/20";
            default: return "bg-gray-500/10 text-gray-500";
        }
    };

    if (error) return (
        <InstructorLayout>
            <div className="p-10 text-center text-destructive">Error loading enrollments. Please try again.</div>
        </InstructorLayout>
    );

    return (
        <InstructorLayout>
            <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Student Enrollments</h1>
                        <p className="text-muted-foreground">Track student progress and engagement.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg font-medium hover:bg-secondary transition-colors">
                        <Download className="size-4" /> Export CSV
                    </button>
                </div>

                <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                    {/* Toolbar */}
                    <div className="p-4 border-b border-border flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search students by name or email..."
                                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <select 
                            className="px-3 py-2 border border-border rounded-lg text-sm bg-background outline-none w-full md:w-auto"
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                        >
                            {uniqueCourses.map(course => (
                                <option key={course} value={course}>{course}</option>
                            ))}
                        </select>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto min-h-[300px] relative">
                        {isLoading ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
                                <Loader2 className="size-8 text-primary animate-spin" />
                            </div>
                        ) : (
                            <table className="w-full text-sm text-left">
                                <thead className="bg-secondary/50 text-muted-foreground font-medium border-b border-border">
                                    <tr>
                                        <th className="px-6 py-4">Student Name</th>
                                        <th className="px-6 py-4">Course</th>
                                        <th className="px-6 py-4">Progress</th>
                                        <th className="px-6 py-4">Last Active</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {filteredEnrollments.map((student) => (
                                        <tr key={student.id} className="hover:bg-secondary/20 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs overflow-hidden">
                                                        {student.avatar ? (
                                                            <img src={student.avatar} alt="" className="size-full object-cover" />
                                                        ) : (
                                                            student.name.charAt(0)
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-foreground">{student.name}</p>
                                                        <p className="text-xs text-muted-foreground">{student.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-medium">{student.course}</td>
                                            <td className="px-6 py-4 max-w-[150px]">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                                        <div className="h-full bg-primary rounded-full" style={{ width: `${student.progress}%` }} />
                                                    </div>
                                                    <span className="text-xs font-bold w-8">{student.progress}%</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {student.lastActive ? formatDistanceToNow(new Date(student.lastActive), { addSuffix: true }) : 'Never'}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(student.status)}`}>
                                                    {student.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors" title="Message Student">
                                                    <Mail className="size-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredEnrollments.length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="px-6 py-20 text-center text-muted-foreground">
                                                <User className="size-12 mx-auto mb-4 opacity-10" />
                                                <p>No student enrollments found.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Footer Info */}
                    <div className="p-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
                        <p>Showing {filteredEnrollments.length} students</p>
                    </div>
                </div>
            </div>
        </InstructorLayout>
    );
}
