const phoneFormat = {
    br: 
        `<input
            type="tel"
            id="phone"
            pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
            placeholder="+55 00 00000 0000"
        />`,

    usa: 
        `<input
            type="tel"
            id="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="+1 000 000 0000"
        />`,
}

const phoneMask = {
    br: "+{55} 00 00000 0000",
    usa: "+{1} 000 000 0000"
}

export { phoneFormat, phoneMask };