package hu.bme.msc.corba.server;

import java.util.Properties;

import org.omg.CORBA.ORB;
import org.omg.CosNaming.NameComponent;
import org.omg.CosNaming.NamingContext;
import org.omg.CosNaming.NamingContextHelper;
import org.omg.PortableServer.POA;
import org.omg.PortableServer.POAHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hu.bme.msc.server.impl.TimeService;

public class CORBAServer {

	private static final String JAC_ORB = "JacORB";

	private static final Logger LOGGER = LoggerFactory.getLogger(CORBAServer.class);

	private static ORB orb;

	public static void main(String[] args) {
		LOGGER.info("Initializing CORBA environment");
		LOGGER.info("Creating CORBA properties");
		Properties orbProp = new Properties();

		LOGGER.info("Pluggable ORb is:{}", JAC_ORB);
		// Should be on the classpath
		orbProp.put("org.omg.CORBA.ORBClass", "org.jacorb.orb.ORB");
		orbProp.put("org.omg.CORBA.ORBSingleton", "org.jacorb.orb.ORBSingleton");
		// Should start NameServer before starting ORB
		orbProp.put("ORBInitRef.NameService", "file:/tmp/NS_Ref");

		try {
			LOGGER.info("Check if the {} library is available", JAC_ORB);
			Class.forName("org.jacorb.orb.ORB");

			LOGGER.info("Creating ORB");
			orb = org.omg.CORBA.ORB.init((String[]) null, orbProp);

			// LOGGER.info("Creating timeout policy");
			// Any timeout = orb.create_any();
			// timeout.insert_longlong(corbaFuture(Duration.ofSeconds(3).toMillis()).time);
			//
			// LOGGER.info("Adding ORB wide timeout policy");
			// // RelativeRoundtripTimeout
			// Policy timeoutPolicy =
			// orb.create_policy(RELATIVE_RT_TIMEOUT_POLICY_TYPE.value,
			// timeout);
			// PolicyManager policyManager = PolicyManagerHelper
			// .narrow(orb.resolve_initial_references("ORBPolicyManager"));
			// policyManager._set_policy_override(new Policy[] { timeoutPolicy
			// }, SetOverrideType.ADD_OVERRIDE);

			LOGGER.info("Activating POA");
			POA poa = POAHelper.narrow(orb.resolve_initial_references("RootPOA"));
			poa.the_POAManager().activate();

			org.omg.CORBA.Object o = poa.servant_to_reference(new TimeService());
			// LOGGER.info("IOR:\r\n {}", orb.object_to_string(o));

			LOGGER.info("Initializing NameService");
			// Obtain reference for our nameservice
			org.omg.CORBA.Object object = orb.resolve_initial_references("NameService");

			// Since we have only an object reference, we must
			// cast it to a NamingContext. We use a helper
			// class for this purpose
			NamingContext namingContext = NamingContextHelper.narrow(object);
			NameComponent list[] = { new NameComponent("time_service", "") };
			LOGGER.info("Rebind name");
			namingContext.rebind(list, o);

			LOGGER.info("Registering ORB shutdown hook");
			Runtime.getRuntime().addShutdownHook(new Thread() {
				@Override
				public void run() {
					LOGGER.info("Shutting down ORB...");
					orb.shutdown(true);
				}
			});

			LOGGER.info("Running ORB...");
			orb.run();
		} catch (Exception e) {
			LOGGER.error("Exception!", e);
			System.exit(-1);
		}
	}

}
