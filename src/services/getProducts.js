
import { getFirestore } from './../firebase'

const getProducts = async () => {
    const db = getFirestore()
    const snapshot = await db.collection('Cursos')
    return snapshot
        .get()
        .then((q) => q.docs.map(doc => doc.data()))
}

export default getProducts
