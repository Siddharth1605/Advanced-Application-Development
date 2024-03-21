package com.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.Repository.UserRepository;
import com.backend.Model.User;
import io.micrometer.common.lang.NonNull;

@Service
public class UserService {
    
    @Autowired 
    private UserRepository userrepo;

    public User updateUser(@NonNull long id, User updated)
    {
        return userrepo.findById(id).map(existingUser -> {
            existingUser.setName(updated.getName());
            existingUser.setPassword(updated.getPassword());
            existingUser.setEmail(updated.getEmail());
            return userrepo.save(existingUser);
        })
        .orElseThrow(() -> new RuntimeException("User not found with this id"));
    }

    public String deleteUser(@NonNull long id)
    {
        if(userrepo.existsById(id))
        {
            userrepo.deleteById(id);
            return "Your account has been deleted";
        }
        return "Account not found";
    }
    
}
