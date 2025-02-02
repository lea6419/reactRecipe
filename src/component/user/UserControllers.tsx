
import { Box } from '@mui/material';
import Register from './Register';
import LoginModal from './LoginModal';
import UserUpdateForm from './UserUpdateForm';
import UserAvatar from './UserAvatar';

const UserControls = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
            <div style={{ position: 'absolute', top: 20, left: 20 }}>
                <UserAvatar />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: 20, left: 100 }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Register />
                    <LoginModal />
                </Box>
                <br />
                <UserUpdateForm />
            </div>
        </div>
    );
};

export default UserControls;
