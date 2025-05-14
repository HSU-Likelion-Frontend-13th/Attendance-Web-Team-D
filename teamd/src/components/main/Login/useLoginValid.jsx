import {useState, useEffect} from 'react';

export default function useLoginValid(changeValue) {
    const [validText, setValidText] = useState('');
    const [isValid, setIsValid] = useState({isname: false, isstudentID: false});

    useEffect(() => {
        const nameExp = /^[가-힣]{2,4}$/;
        const idExp = /^[0-9]{7}$/;

        const name = changeValue
            .name
            .trim();
        const id = changeValue
            .studentID
            .trim();

        if (!name && !id) {
            setValidText('정보를 입력해주세요');
            setIsValid({isname: false, isstudentID: false});
        } else if (!name && idExp.test(id)) {
            setValidText('입력하신 이름 정보가 일치하지 않습니다');
            setIsValid(prev => ({
                ...prev,
                isname: false
            }));
        } else if (nameExp.test(name) && !id) {
            setValidText('입력하신 학번 정보가 일치하지 않습니다');
            setIsValid(prev => ({
                ...prev,
                isstudentID: false
            }));
        } else if (name && !/^[가-힣]+$/.test(name)) {
            setValidText('유효한 문자를 입력해주세요');
            setIsValid(prev => ({
                ...prev,
                isname: false
            }));
        } else if (id && !idExp.test(id)) {
            setValidText('7자리 숫자를 입력해주세요');
            setIsValid(prev => ({
                ...prev,
                isstudentID: false
            }));
        } else {
            setValidText('');
            setIsValid({isname: true, isstudentID: true});
        }
    }, [changeValue.name, changeValue.studentID]);

    return {validText, isValid};
}
