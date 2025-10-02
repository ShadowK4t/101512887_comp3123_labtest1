const resolvedPromise = () => {
    setTimeout(() => {
    let success = {'message' : 'Resolved Promise!'}
    console.log(success);
    }, 500)
}

const rejectedPromise = () => {
    setTimeout(() => {
        try {
            throw new Error('error: rejected Promise.')
        } catch (e){
            console.error(e)
        }
    }, 500)
}

resolvedPromise()
rejectedPromise()