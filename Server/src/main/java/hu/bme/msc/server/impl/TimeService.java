package hu.bme.msc.server.impl;

import java.util.Date;

import server.time.ITimeServicePOA;

public class TimeService extends ITimeServicePOA {

	@Override
	public String getServerTime() {
		return String.valueOf(new Date(System.currentTimeMillis()));
	}

}
