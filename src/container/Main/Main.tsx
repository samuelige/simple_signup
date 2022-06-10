import React, { ChangeEvent, useState } from 'react'
import Button from '../../components/Button/Button'
import InputField from '../../components/InputField/InputField'
import Title from '../../components/Title/Title'
import { illustration } from '../../constants/images'
import './Main.scss'
const Main = () => {
    const [formState, setFormState] = useState<Record<string, string>>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',

    })

    const {firstName, lastName, email, password} = formState;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const getValue= {...formState}
        getValue[e.target.name] = e.target.value
        setFormState(getValue)
    }

    const formData = [
        {
            id: 1,
            label: 'First name',
            type: 'text',
            name: 'firstName',
            value: firstName,
            handleChange
        },
        {
            id: 2,
            label: 'Last name',
            type: 'text',
            name: 'firstName',
            value: lastName,
            handleChange
        },
        {
            id: 3,
            label: 'Email',
            type: 'email',
            name: 'email',
            value: email,
            handleChange
        },
        {
            id: 4,
            label: 'Password',
            type: 'password',
            name: 'password',
            value: password,
            handleChange
        }
    ]
  return (
    <main className='main_conatiner'>
        <picture className='main_image_conatainer'>
            <img src={illustration} alt="" />
        </picture>
        <aside className='form_cotainer'>
            <Title 
                title="Create an account"
                isSubTitle={true}
                subtitle="log in instead"
            />

            <form>
                {
                    formData && formData.map(({label, type, name, value, handleChange}) => (
                        <InputField
                            label={label}
                            type={type}
                            name={name}
                            value={value}
                            handleChange={handleChange}
                        />
                    ))
                }

                <div className='checkBok_container'>
                    <input type="checkbox" name="" id="" />
                    <p>By creating an account, I agree to our <span><a href="##">Terms of use</a></span>
                        <br />
                        and <span><a href="##">Privacy Policy</a></span>
                    </p>
                </div>

                <div className="form_btn">
                    <Button lg={true}>Create an account</Button>
                </div>
            </form>
        </aside>
    </main>
  )
}

export default Main