/* eslint-disable @typescript-eslint/no-explicit-any */
import KpiActualComponent from '@/components/screens/home/KpiActualComponent'
import { getKPIByIdIncludingKPIActual } from '@/lib/actions/kpiActions'
import { getMessages } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages: any = await getMessages({ locale })
  const title = messages?.NavbarLinks?.kpiTarget

  return {
    title,
  }
}

export default async function KpiActualTarget({
  params,
}: {
  params: Promise<{ kpiId: string }>
}) {
  const { kpiId } = await params

  const data = await getKPIByIdIncludingKPIActual(+kpiId)

  return <KpiActualComponent data={data} />
}
