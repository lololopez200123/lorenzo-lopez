
import { getFirestore } from './../firebase'

const getSingleProduct = async (name) => {
    const db = getFirestore()
    const snapshot = await db.collection('Cursos')
    return snapshot.where('name', '==', name)
        .get()
        .then((q) => q.docs.map(doc => doc.data()))
}

export default getSingleProduct
