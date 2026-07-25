import { Head } from '@inertiajs/react';

export default function AdminDashboard() {
    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="rounded-xl border border-sidebar-border/70 bg-background p-6 shadow-sm dark:border-sidebar-border">
                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                    Admin-only area placeholder for milestone 1.
                </p>
            </div>
        </>
    );
}
