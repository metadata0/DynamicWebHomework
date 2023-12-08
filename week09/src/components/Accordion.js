import {useState} from 'react'
import {GohevronDown, GoChevronLeft} from 'react-icons/go'

const items = [
    {
        id: '1',
        heading: ''
    }
]

export default function Accordion({items}) {

    const [expandedIndex, setExpandedIndex] = useState(-1)

    // this is to set the index to -1 to close all panels
    const handleClick = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === index){
                return -1
            } else {
                return nextIndex
            })
        } 
    }

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex
        const icon = (
            <span className='text-2xl'>
                {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
            </span>
        )

        return (
            <div key={item.id}>
                {/* Click the heading div and set this itemed index to the expandedIndex in our State */}
                <div onClick={() => handleClick(index)} className='flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer'>
                    {item.heading}
                </div>
                {/* IF the content isExpanded, render it, else render nothing */}
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    })

    return <div>{renderedItems}</div>



    // return (
    //     <Button 
    //     primary 
    //     rounded 
    //     outline 
    //     onClick={handleClick} 
    //     className='mb-5'>
    //     Buy Now    
    //   </Button>

    //   <Button success rounded>
    //     Sign Out
    //   </Button>

    //   <Button danger rounded>
    //     Delete
    //   </Button>
    // )
    
}