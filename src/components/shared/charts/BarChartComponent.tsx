'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import CustomCardHeader from '../cards/CustomCardHeader'

import { Card, CardContent } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { IChartData } from '@/types/kpi'
import NoResultFound from '../NoResultFound'

interface IBarChartComponentProps<T> {
  title: string
  description?: string
  year: string
  chartConfig: ChartConfig
  chartData: Array<T>
  isMultipleData?: boolean
}

const BarChartComponent = <T,>({
  title,
  description,
  year,
  chartData,
  chartConfig,
}: IBarChartComponentProps<T>) => {
  return (
    <Card className="w-full max-w-2xl">
      <CustomCardHeader title={title} description={description} />
      {chartData && chartData.length > 0 ? (
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={(item: IChartData) => {
                  if ('month' in item) return item.month
                  if ('quarter' in item) return item.quarter
                  if ('semiAnnual' in item) return item.semiAnnual
                  if ('year' in item) return item.year
                  return ''
                }}
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              {Object.entries(chartConfig || {}).map(([key, config]) => {
                return (
                  <Bar key={key} dataKey={key} fill={config.color} radius={4} />
                )
              })}
            </BarChart>
          </ChartContainer>
        </CardContent>
      ) : (
        <NoResultFound
          label={`No results found for the year ${year}`}
          wrapperStyle="min-h-[300px]"
        />
      )}
    </Card>
  )
}

export default BarChartComponent
