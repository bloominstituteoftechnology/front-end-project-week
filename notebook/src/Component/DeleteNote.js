import React from 'react';
import {Link} from 'react-router-dom';

const DeleteNote = () => {
    return (
        <div>
            <h4>Are you sure you want to delete this?</h4>
            {/* <Link */}<button>DELETE</button>
            {/* <Link */}<button>NO</button>
        </div>
    );
}