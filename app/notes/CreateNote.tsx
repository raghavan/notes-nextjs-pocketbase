'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const router = useRouter();

    const create = async () => {
        const response = await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });   
        setContent('');
        setTitle('');
        router.refresh();
    }


    return (
        <form onSubmit={create}>
            <h3> Create Note</h3>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="content">Content</label>
            <input type="text" id="content" name="content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} />
            <button type="submit">Create</button>
        </form>
    )

}