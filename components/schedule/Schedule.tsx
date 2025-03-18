import { SchedulerProvider } from '@/providers/schedular-provider'
import SchedulerWrapper from './_components/wrapper/schedular-wrapper'

export default function Schedule() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-4 py-8 md:py-10">
            <SchedulerProvider weekStartsOn="monday">
                <SchedulerWrapper
                    classNames={{
                        tabs: {
                            panel: "p-0",
                        },
                    }}
                />
            </SchedulerProvider>
        </section>
    )
}
