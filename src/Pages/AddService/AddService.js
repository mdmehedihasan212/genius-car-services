import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = 'https://afternoon-lowlands-28127.herokuapp.com/service';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Successfully Added!!!')
            })
    };

    return (
        <div className='w-50 mx-auto mt-4'>
            <h1 className='text-center'>Please add services</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='btn btn-primary mb-2' type="Submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;