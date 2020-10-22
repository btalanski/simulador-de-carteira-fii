import React from "react";

export const formatNumber = (n) => {
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
export default function CurrencyInput({ className, value, onChange }){
    const handleChange = (e) => {
        onChange(e.target.value);
    }
    return (
        <input type="text" className={className} onChange={handleChange} value={value} />
    )
}