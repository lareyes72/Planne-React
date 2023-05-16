import '../styles/app-header.css';

function AppHeader( {fullName, nickName, profile}) {
    return (
        <div className='app-header-container'>
            <div className='fullNameProfile'>
                <h1>{fullName}</h1>
                <div className='profile'>
                    <p>{profile}</p>
                </div>
            </div>
            <h2>{nickName}</h2>
        </div>
    );
}

export default AppHeader;