/**
 * Handles uploading to the cloud and getting download URLs.
 */
export default class CloudUploader {
    constructor(app) {
        this.app = app;
        this.storageRef = app.storage().ref();
    }

    /**
     * Stores the given File object.
     * @param file The File object to store
     * @param remoteName The name of the file on the storage bucket
     * @return {An|firebase.storage.UploadTask|IDBRequest<IDBValidKey>|Promise<void>}
     */
    storeFile(file, remoteName) {
        let ref = this.storageRef.child(remoteName);
        return ref.put(file);
    }


    /**
     * Retrieves the object URL for the given remote file name on the storage bucket.
     * @param remoteName The name of the file on the storage bucket
     * @return {Promise<any> | A}
     */
    fetchDownloadUrl(remoteName) {
        let ref = this.storageRef.child(remoteName);
        return ref.getDownloadURL();
    }
}


