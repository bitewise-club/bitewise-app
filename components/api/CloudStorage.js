/**
 * Handles uploading to the cloud and getting download URLs.
 */
export class CloudUploader {
    constructor(app) {
        this.app = app;
        this.storageRef = app.storage().ref();
    }

    /**
     * Stores the given File object
     * @param file The File object to store
     * @param nameOnDatabase The name on the database
     */
    storeFile(file, nameOnDatabase) {
        let ref = this.storageRef.child(nameOnDatabase);
        return ref.put(file);
    }

    fetchDownloadUrl(nameOnDatabase) {
        let ref = this.storageRef.child(nameOnDatabase);
        return ref.getDownloadURL()
    }
}


