package hu.bme.msc;

import java.util.Properties;

import org.omg.CORBA.ORB;
import org.omg.CosNaming.NameComponent;
import org.omg.CosNaming.NamingContext;
import org.omg.CosNaming.NamingContextHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import server.time.ITimeService;
import server.time.ITimeServiceHelper;

public class CORBAClient {

	private static final String JAC_ORB = "JacORB";

	private static final Logger LOGGER = LoggerFactory.getLogger(CORBAClient.class);

	private static ORB orb;

	public static void main(String[] args) {
		LOGGER.info("Initializing CORBA environment");
		LOGGER.info("Creating CORBA properties");
		Properties orbProp = new Properties();

		LOGGER.info("Pluggable ORb is:{}", JAC_ORB);
		orbProp.put("org.omg.CORBA.ORBClass", "org.jacorb.orb.ORB");
		orbProp.put("org.omg.CORBA.ORBSingleton", "org.jacorb.orb.ORBSingleton");
		orbProp.put("ORBInitRef.NameService", "file:/tmp/NS_Ref");

		try {
			LOGGER.info("Check if the {} library is available", JAC_ORB);
			Class.forName("org.jacorb.orb.ORB");

			LOGGER.info("Creating ORB");
			orb = org.omg.CORBA.ORB.init((String[]) null, orbProp);

			// org.omg.CORBA.Object o = orb.string_to_object(args[0]);
			// ITimeService iTimeService = ITimeServiceHelper.narrow(o);
			org.omg.CORBA.Object object = orb.resolve_initial_references("NameService");
			NamingContext namingContext = NamingContextHelper.narrow(object);
			NameComponent list[] = { new NameComponent("time_service", "") };

			org.omg.CORBA.Object object2 = namingContext.resolve(list);
			ITimeService iTimeService = ITimeServiceHelper.narrow(object2);
			LOGGER.info("RESULT: " + iTimeService.getServerTime());
			orb.shutdown(true);
		} catch (Exception e) {
			LOGGER.error("Exception!", e);
			System.exit(-1);
		}
	}

}
