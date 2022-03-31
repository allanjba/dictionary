const ErrorMessage = ({ message, word }) => {
    return (
        <>
            <h1>
                {word}
            </h1>
            <p>{message}</p>
        </>
    )

}

export default ErrorMessage;