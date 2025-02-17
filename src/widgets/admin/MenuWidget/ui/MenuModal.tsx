import { useState, useRef, ChangeEvent, useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { FiUpload } from 'react-icons/fi'
import '@/widgets/admin/MenuWidget/style/MenuModal.scss'

interface MenuItem {
    id?: number
    image: string
    name: string
    category: string
    price: number
    description: string
    status?: 'available' | 'soldout'
}

interface MenuModalProps {
    isOpen: boolean
    onClose: () => void
    initialData?: MenuItem
    mode?: 'create' | 'edit'
}

const categories = ['메인', '사이드', '음료', '디저트'] as const
type Category = (typeof categories)[number]

export default function MenuModal({
    isOpen,
    onClose,
    initialData,
    mode = 'create',
}: MenuModalProps) {
    const [menuName, setMenuName] = useState('')
    const [category, setCategory] = useState<Category>('메인')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string>('')
    const fileInputRef = useRef<HTMLInputElement>(null)

    // 초기 데이터 설정
    useEffect(() => {
        if (initialData && isOpen) {
            setMenuName(initialData.name)
            setCategory(initialData.category as Category)
            setPrice(initialData.price.toString())
            setDescription(initialData.description)
            setImagePreview(initialData.image)
        }
    }, [initialData, isOpen])

    // 모달이 닫힐 때 폼 초기화
    useEffect(() => {
        if (!isOpen) {
            setMenuName('')
            setCategory('메인')
            setPrice('')
            setDescription('')
            setImage(null)
            setImagePreview('')
        }
    }, [isOpen])

    if (!isOpen) return null

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            // 파일 크기 체크 (10MB)
            if (file.size > 10 * 1024 * 1024) {
                alert('이미지 크기는 10MB를 초과할 수 없습니다.')
                return
            }

            // 이미지 파일 타입 체크
            if (!file.type.startsWith('image/')) {
                alert('이미지 파일만 업로드 가능합니다.')
                return
            }

            setImage(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const menuData = {
            id: initialData?.id,
            name: menuName,
            category,
            price: Number(price),
            description,
            image: image ? URL.createObjectURL(image) : imagePreview,
            status: initialData?.status || 'available',
        }

        // TODO: API 연동 시 구현
        console.log('Submitting menu data:', menuData)
        console.log('Mode:', mode)
        onClose()
    }

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>{mode === 'create' ? '새 메뉴 추가' : '메뉴 수정'}</h2>
                    <button onClick={onClose} className='close-button'>
                        <IoCloseOutline />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className='modal-form'>
                    <div className='form-group'>
                        <label htmlFor='menuName'>메뉴명</label>
                        <input
                            type='text'
                            id='menuName'
                            value={menuName}
                            onChange={(e) => setMenuName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='category'>카테고리</label>
                        <select
                            id='category'
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value as Category)
                            }
                            required>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='price'>가격</label>
                        <input
                            type='number'
                            id='price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            min='0'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='description'>메뉴 설명</label>
                        <textarea
                            id='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>이미지 업로드</label>
                        <div
                            className='image-upload-area'
                            onClick={() => fileInputRef.current?.click()}>
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt='Preview'
                                    className='image-preview'
                                />
                            ) : (
                                <div className='upload-placeholder'>
                                    <FiUpload className='upload-icon' />
                                    <span>
                                        클릭하여 이미지 업로드
                                        <br />
                                        <small>최대 10MB</small>
                                    </span>
                                </div>
                            )}
                            <input
                                type='file'
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept='image/*'
                                className='hidden'
                                required={!imagePreview}
                            />
                        </div>
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
