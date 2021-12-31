import React, { useState } from "react";
import {IState as Props} from '../App';

interface IProps {
    people: Props["people"]
    setPeople:React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        url: string;
        note?: string | undefined;
    }[]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        url: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        if(!input.name || !input.age || !input.url) return;

        setPeople([
            ...people, {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ])

        setInput({
            name:"",
            age:"",
            url:"",
            note:""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                name="name"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                value={input.url}
                name="url"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                name="age"
                onChange={handleChange}
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={input.note}
                name="note"
                onChange={handleChange}
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList;