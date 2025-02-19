import { useState, useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import '@/widgets/admin/TableWidget/style/TableModal.scss'

interface TableModalProps {
    isOpen: boolean
    onClose: () => void
    initialData?: TableItem
    mode?: 'create' | 'edit'
}

interface TableItem {
    id?: string
    capacity: number
    status: 'available' | 'inUse'
}

export default function TableModal({
    isOpen,
    onClose,
    initialData,
    mode = 'create',
}: TableModalProps) {
    const [tableId, setTableId] = useState('')
    const [capacity, setCapacity] = useState('')
    const [status, setStatus] = useState<'available' | 'inUse'>('available')

    // 초기 데이터 설정
    useEffect(() => {
        if (initialData && isOpen) {
            setTableId(initialData.id || '')
            setCapacity(initialData.capacity.toString())
            setStatus(initialData.status)
        }
    }, [initialData, isOpen])

    // 모달이 닫힐 때 폼 초기화
    useEffect(() => {
        if (!isOpen) {
            setTableId('')
            setCapacity('')
            setStatus('available')
        }
    }, [isOpen])

    if (!isOpen) return null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const tableData = {
            id: tableId,
            capacity: Number(capacity),
            status,
        }

        // TODO: API 연동 시 구현
        console.log('Submitting table data:', tableData)
        console.log('Mode:', mode)
        onClose()
    }

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>
                        {mode === 'create' ? '새 테이블 추가' : '테이블 수정'}
                    </h2>
                    <button onClick={onClose} className='close-button'>
                        <IoCloseOutline />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className='modal-form'>
                    <div className='form-group'>
                        <label htmlFor='tableId'>테이블 번호</label>
                        <input
                            type='text'
                            id='tableId'
                            value={tableId}
                            onChange={(e) => setTableId(e.target.value)}
                            placeholder='예: T01'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='capacity'>수용 인원</label>
                        <input
                            type='number'
                            id='capacity'
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            min='1'
                            max='12'
                            placeholder='예: 4'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='status'>상태</label>
                        <select
                            id='status'
                            value={status}
                            onChange={(e) =>
                                setStatus(
                                    e.target.value as 'available' | 'inUse'
                                )
                            }
                            required>
                            <option value='available'>사용 가능</option>
                            <option value='inUse'>사용 중</option>
                        </select>
                    </div>
                    <div className='modal-actions'>
                        <button
                            type='button'
                            onClick={onClose}
                            className='cancel-button'>
                            취소
                        </button>
                        <button type='submit' className='submit-button'>
                            {mode === 'create' ? '추가' : '수정'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
