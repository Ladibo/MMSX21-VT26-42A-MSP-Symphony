package se.havochvatten.symphony.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.Map;

public class UserDto {
    private final String username;
    private final Map<String, Object> settings;
    private final boolean admin;

    @JsonCreator
    public UserDto(@JsonProperty("username") String username,
                   @JsonProperty("settings") Map<String, Object> settings,
                   @JsonProperty("admin") boolean admin) {
        this.username = username;
        this.settings = settings == null ? new HashMap<>() : settings;
        this.admin = admin;
    }

    public String getUsername() {
        return username;
    }

    public Map<String, Object> getSettings() {
        return settings;
    }

    public boolean isAdmin() {
        return admin;
    }
}
