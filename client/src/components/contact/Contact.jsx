import { useState } from 'react'
import supabase from '../../database/supabase'
import { motion } from "framer-motion"

export default function Contact() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isUploading, setIsUploading] = useState(false)
    const [messageInfo, setMessageInfo] = useState(false)

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (message && validateEmail(email)) {
            setIsUploading(true)
            const { data, error } = await supabase.from("contact")
                .insert([{ email, message }])
                .select()

            setIsUploading(false)
            setEmail("")
            setMessage("")
            setMessageInfo(true)

            setTimeout(() => {
                setMessageInfo(false)
            }, 2000)
        }
    }

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/img/shake.jpg" alt="shake" />
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form
                    className='form'
                    onSubmit={handleSubmit}
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="form__input"
                        placeholder="Email adress"
                        id="email"
                        disabled={isUploading}
                        required />
                    <label for="email" class="form__label">Email adress</label>
                    <textarea
                        placeholder='Message...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        disabled={isUploading}
                        cols="15"
                        rows="15" ></textarea>
                    <button disabled={isUploading}>Send</button>
                    {messageInfo ? <motion.span animate={{ scale: 1.5 }}>Thanks, I'll reply ASAP :)</motion.span> : null}
                </form>
            </div>
        </div>
    )
}
