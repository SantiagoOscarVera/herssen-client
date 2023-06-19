import React from 'react';
import { FileUpload } from 'primereact/fileupload';
import Layout from '../../../Layouts/ArtistDashLayout';
import FormNewItem from './FormNewItem';

function ArtistNewItem() {
  return (
    <Layout main="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl">Create new Item</h2>
      </div>
      <div className="flex flex-col items-center gap-6">
        <p>Upload image, Video, Audio or 3D model</p>
        <div className="card text-center">
          <FileUpload
            name="demo[]"
            url="/api/upload"
            emptyTemplate={<p className="m-0">Drag and drop files here to upload.</p>}
            chooseOptions={{ className: 'custom-choose-button' }}
            uploadOptions={{ className: 'custom-upload-button' }}
            cancelOptions={{ className: 'custom-cancel-button' }}
          />
        </div>
        <FormNewItem />
      </div>
      <style>
        {`
          .custom-choose-button,
          .custom-upload-button,
          .custom-cancel-button {
            padding: 5px 10px;
            font-size: 12px;
          }

          .custom-choose-button {
            background-color: #6366F1;
          }

          .custom-upload-button {
            background-color: #6366F1;
          }
          
          .custom-cancel-button {
            background-color: #6366F1;
          }
        `}
      </style>
    </Layout>
  );
}

export default ArtistNewItem;
