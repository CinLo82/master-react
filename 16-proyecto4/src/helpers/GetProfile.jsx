import { Global } from './Global'

export const GetProfile = async ({userId, setUserProfile}) => {
    const token = localStorage.getItem('token')

    if (!userId) {
        console.error('userId is undefined');
        return;
    }

    try {
        const request = await fetch(Global.url + 'user/profile/'+ userId, { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })

        const data = await request.json()
        if(data.status === 'success'){
            setUserProfile(data.userProfile)
        }
    } catch (error) {
        console.error('Error al obtener el perfil:', error)
    }
}
