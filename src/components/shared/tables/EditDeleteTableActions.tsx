import { SheetNames, useSheetStore } from '@/stores/sheet-store'
import { Edit2, Trash } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import Tooltips from '../tooltips/Tooltips'

interface IEditDeleteTableActionsProps {
  rowId: string
  callback: () => void
  sheetName: SheetNames
}

const EditDeleteTableActions: FC<IEditDeleteTableActionsProps> = ({
  rowId,
  callback,
  sheetName,
}) => {
  const { openSheet } = useSheetStore((store) => store.actions)
  const t = useTranslations('general')

  return (
    <div className="flex items-center justify-end gap-2">
      <Tooltips content={t('edit')} variant="bold" position="top" asChild>
        <button
          onClick={() =>
            openSheet({
              sheetToOpen: sheetName,
              rowId,
              isEdit: true,
            })
          }
          className="text-gray-700"
        >
          <Edit2 size={16} />
        </button>
      </Tooltips>
      <Tooltips content={t('delete')} variant="bold" position="top" asChild>
        <button onClick={callback} className="text-red-600">
          <Trash size={16} />
        </button>
      </Tooltips>
    </div>
  )
}

export default EditDeleteTableActions
