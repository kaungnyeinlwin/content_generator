import { Head, usePage } from '@inertiajs/react';
import { dashboard } from '@/routes';

type PageProps = {
    user?: {
        name?: string;
        credit_balance?: number;
    };
};

export default function Dashboard() {
    const { props } = usePage<PageProps>();
    const user = props.user;

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="rounded-xl border border-sidebar-border/70 bg-background p-6 shadow-sm dark:border-sidebar-border">
                    <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                        Welcome back
                    </p>
                    <h1 className="mt-2 text-2xl font-semibold">
                        {user?.name ?? 'Guest'}
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Your current credit balance is{' '}
                        <span className="font-semibold text-foreground">
                            {user?.credit_balance ?? 0}
                        </span>
                        .
                    </p>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
