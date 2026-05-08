package se.havochvatten.symphony.web;

import jakarta.annotation.security.RolesAllowed;
import jakarta.ejb.EJB;
import jakarta.ejb.Stateless;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import se.havochvatten.symphony.service.SupportService;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

@Stateless
@Path("/support")
public class SupportREST {
    private static final Logger LOG = Logger.getLogger(SupportREST.class.getName());

    @EJB
    private SupportService supportService;

    @GET
    @Path("/manual")
    @Produces(MediaType.TEXT_PLAIN)
    @RolesAllowed("GRP_SYMPHONY")
    public Response getManual(@QueryParam("lang") @DefaultValue("en") String lang) {
        try {
            String content = supportService.getManual(lang);
            return Response.ok(content).build();
        } catch (IOException e) {
            LOG.log(Level.SEVERE, "Failed to read support manual [{0}]", lang);
            return Response.serverError().entity("Failed to read manual").build();
        }
    }

    @PUT
    @Path("/manual")
    @Consumes(MediaType.TEXT_PLAIN)
    @RolesAllowed("GRP_SYMPHONY_ADMIN")
    public Response saveManual(@QueryParam("lang") @DefaultValue("en") String lang, String content) {
        try {
            supportService.saveManual(lang, content);
            return Response.noContent().build();
        } catch (IOException e) {
            LOG.log(Level.SEVERE, "Failed to save support manual [{0}]", lang);
            return Response.serverError().entity("Failed to save manual").build();
        }
    }
}
