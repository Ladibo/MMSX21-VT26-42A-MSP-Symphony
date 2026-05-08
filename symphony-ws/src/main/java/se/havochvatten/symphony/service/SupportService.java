package se.havochvatten.symphony.service;

import jakarta.ejb.EJB;
import jakarta.ejb.Stateless;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.logging.Level;
import java.util.logging.Logger;

@Stateless
public class SupportService {
    private static final Logger LOG = Logger.getLogger(SupportService.class.getName());
    private static final String DIR_PROPERTY = "symphony.support.dir";
    private static final String MANUAL_FILENAME = "manual.md";
    private static final String DEFAULT_LANG = "en";
    private static final java.util.regex.Pattern SAFE_LANG = java.util.regex.Pattern.compile("^[a-z]{2}$");

    @EJB
    private PropertiesService propertiesService;

    public String getManual(String lang) throws IOException {
        Path path = resolveManualPath(sanitizeLang(lang));
        if (!Files.exists(path)) {
            // Fall back to default language
            path = resolveManualPath(DEFAULT_LANG);
        }
        if (!Files.exists(path)) {
            return "";
        }
        return Files.readString(path, StandardCharsets.UTF_8);
    }

    public void saveManual(String lang, String content) throws IOException {
        Path path = resolveManualPath(sanitizeLang(lang));
        Files.createDirectories(path.getParent());
        Files.writeString(path, content, StandardCharsets.UTF_8);
        LOG.log(Level.INFO, "Support manual [{0}] saved to {1}", new Object[]{lang, path});
    }

    private Path resolveManualPath(String lang) {
        String dir = propertiesService.getProperty(DIR_PROPERTY, "");
        if (dir.isEmpty()) {
            LOG.warning("symphony.support.dir not configured");
        }
        return Paths.get(dir, lang, MANUAL_FILENAME);
    }

    private String sanitizeLang(String lang) {
        if (lang == null || !SAFE_LANG.matcher(lang).matches()) {
            return DEFAULT_LANG;
        }
        return lang;
    }
}
