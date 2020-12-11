import React from 'react'
import Card from './Card'

const EditBlog = ({location}) => {
    return (
       <Card blog={location.state}/>
    )
}

export default EditBlog
