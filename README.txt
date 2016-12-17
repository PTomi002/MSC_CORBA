In jaco script change:
#!/bin/sh -> #!/bin/bash

OR

add the scripts under bin.

Export classpath tot h ACTUAL shell (this is not global):
export CLASSPATH="/opt/jacorb/lib/*"

Check a .jar file, list all the compressed jars and files within it:
jar tf ../lib/jacorb-services-3.8.jar | grep NameServer

Starting JacORB NameServer:
./jaco org.jacorb.naming.NameServer -Djacorb.naming.ior_filename=/tmp/NS_Ref&


