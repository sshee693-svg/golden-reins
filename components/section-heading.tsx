import { cn } from '@/lib/utils'

export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)} aria-hidden="true">
      <span className="h-px w-12 bg-primary" />
      <span className="size-1.5 rotate-45 bg-primary" />
      <span className="h-px w-12 bg-primary" />
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  className,
}: {
  eyebrow: string
  title: string
  id?: string
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
      <h2 id={id} className="mt-4 text-balance text-4xl leading-tight md:text-5xl">
        {title}
      </h2>
      <Ornament className="mt-6" />
    </div>
  )
}
