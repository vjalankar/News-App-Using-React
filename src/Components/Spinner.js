import loading from './../loading.gif'




const Spinner=()=>  {
        return (
            <div className="text-center">
                <img src={loading} className="my-3" alt="Loading Your News Please Be patience" />
            </div>
        )
    
}

export default Spinner
