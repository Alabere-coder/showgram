// import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file) => {
    const [progres, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // REFRENCES
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    }, [file])

    return { progres, url, error }
}

export default useStorage;