import { ChartColumnIncreasing, ChartSpline, Clock5 } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const SidebarItems = () => {
  const t = useTranslations('general')

  return [
    {
      title: t('kpi'),
      icon: <ChartSpline className="size-5 min-w-5" />,
      href: '/',
    },
    {
      title: t('kpi-analysis'),
      icon: <ChartColumnIncreasing className="size-5 min-w-5" />,
      href: '/kpi-analysis',
    },
    {
      title: t('kpi-status'),
      icon: <Clock5 className="size-5 min-w-5" />,
      href: '/kpi-status',
    },
  ]
}
