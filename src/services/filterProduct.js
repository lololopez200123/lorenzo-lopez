
import { getFirestore } from './../firebase'

const getFilteredProducts = async (category) => {
    const db = getFirestore()
    const snapshot = await db.collection('Cursos')
    return snapshot.where('category', '==', category)
        .get()
        .then((q) => q.docs.map(doc => doc.data()))
}

export default getFilteredProducts
