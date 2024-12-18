/* eslint-disable @typescript-eslint/no-explicit-any */
import KpiAnalysisComponent from '@/components/screens/analysis/KpiAnalysisComponent'
import { getAllKPI } from '@/lib/actions/kpiActions'
import { getMessages } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages: any = await getMessages({ locale })
  const title = messages?.NavbarLinks?.kpiAnalysis

  return {
    title,
  }
}

export default async function KpiAnalysis() {
  const data = await getAllKPI()

  return <KpiAnalysisComponent data={data} />
}
