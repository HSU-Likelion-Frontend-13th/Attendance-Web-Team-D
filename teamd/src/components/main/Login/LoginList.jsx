import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function LoginList() {
    const navigate = useNavigate();

    useEffect(() => {
        const autoLogin = localStorage.getItem('autoLogin') === 'true';
        const savedName = localStorage.getItem('savedName');
        const savedID = localStorage.getItem('savedID');

        if (autoLogin && savedName && savedID) {
            console.log("자동 로그인");
            
            navigate('/main');
        }
    }, [navigate]);

    return null;
}