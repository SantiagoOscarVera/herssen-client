import React from 'react';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';

function ArtistNewItem() {
    return (
        <>
            <div>
                <h2>Create new Item</h2>

                <div className="card">
                    <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                </div>
            </div>
        </>
    )
}

export default ArtistNewItem