const getAllBackend = (req, res) => {
    try {
        res.status(200).json({
            message: 'Get is Success',
        })
    } catch (error){
        res.status(401).json({ error: error.message })
    }
}

const postBackend = (req, res) => {
    try {
        res.status(200).json({
            message: 'Post is Success',
        })
    } catch (error){
        res.status(401).json({ error: error.message })
    }
}

const putBackend = (req, res) => {
    try {
        res.status(200).json({
            message: 'Put is Success',
        })
    } catch (error){
        res.status(401).json({ error: error.message })
    }
}

const deleteBackend = (req, res) => {
    try {
        res.status(200).json({
            message: 'Delete Success',
        })
    } catch (error){
        res.status(401).json({ error: error.message })
    }
}



module.exports = { getAllBackend, postBackend, putBackend, deleteBackend };