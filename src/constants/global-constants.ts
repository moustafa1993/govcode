import { Calibration, Frequency, KPIType, Units } from '@prisma/client'
import { periodsByFrequency } from './kpi-constants'

type TranslationFunction = (
  key: string,
  values?: Record<string, string | number>,
) => string

export const getKpiTypeOptions = (t: TranslationFunction) => [
  {
    id: KPIType.CUMULATIVE,
    label: t('options.Cumulative'),
    value: KPIType.CUMULATIVE,
  },
  {
    id: KPIType.STAGING,
    label: t('options.Staging'),
    value: KPIType.STAGING,
  },
]

export const getUnitOptions = (t: TranslationFunction) => [
  {
    id: Units.PERCENTAGE,
    label: t('options.Percentage'),
    value: Units.PERCENTAGE,
  },
  {
    id: Units.NUMBER,
    label: t('options.Number'),
    value: Units.NUMBER,
  },
  {
    id: Units.TIME,
    label: t('options.Time'),
    value: Units.TIME,
  },
  {
    id: Units.DAYS,
    label: t('options.Days'),
    value: Units.DAYS,
  },
]

export const getFrequencyOptions = (t: TranslationFunction) => [
  {
    id: Frequency.MONTHLY,
    label: t('options.Monthly'),
    value: Frequency.MONTHLY,
  },
  {
    id: Frequency.QUARTERLY,
    label: t('options.Quarterly'),
    value: Frequency.QUARTERLY,
  },
  {
    id: Frequency.SEMI_ANNUALLY,
    label: t('options.Semi Annually'),
    value: Frequency.SEMI_ANNUALLY,
  },
  {
    id: Frequency.ANNUALLY,
    label: t('options.Annually'),
    value: Frequency.ANNUALLY,
  },
]

export const getCalibrationOptions = (t: TranslationFunction) => [
  {
    id: Calibration.INCREASING,
    label: t('options.Increasing'),
    value: Calibration.INCREASING,
  },
  {
    id: Calibration.DECREASING,
    label: t('options.Decreasing'),
    value: Calibration.DECREASING,
  },
  // Uncomment if needed
  // {
  //   id: Calibration.NEUTRAL,
  //   label: t('options.Neutral'),
  //   value: Calibration.NEUTRAL,
  // },
]

export const frequencyMapping: Record<
  Frequency,
  keyof typeof periodsByFrequency
> = {
  [Frequency.MONTHLY]: 'monthly',
  [Frequency.QUARTERLY]: 'quarterly',
  [Frequency.SEMI_ANNUALLY]: 'semiannual',
  [Frequency.ANNUALLY]: 'yearly',
}

export const quarters = {
  q1: ['January', 'February', 'March'],
  q2: ['April', 'May', 'June'],
  q3: ['July', 'August', 'September'],
  q4: ['October', 'November', 'December'],
}
