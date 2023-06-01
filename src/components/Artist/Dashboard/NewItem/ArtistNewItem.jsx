import React from 'react';
import { FileUpload } from 'primereact/fileupload';
import Layout from '../../../Layouts/ArtistDashLayout';
import FormNewItem from './FormNewItem';

function ArtistNewItem() {
    return (
        <Layout main={" flex flex-col items-center gap-10"}>
            <div className='flex flex-col items-center'>
                <h2 className='text-2xl'>Create new Item</h2>
            </div>
            <div className='flex flex-col items-center gap-6'>
                 <p>Upload image, Video, Audio or 3D model</p>
                <div className="card text-center">
                    <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                </div>
                <FormNewItem />
            </div>
        </Layout>
    )
}

export default ArtistNewItem;