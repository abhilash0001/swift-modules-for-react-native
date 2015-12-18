//
//  CalendarManager.swift
//  SwiftBridge
//
//  Created by Michael Schwartz on 12/11/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

import Foundation

// CalendarManager.swift

@objc(CalendarManager)
class CalendarManager: NSObject {
  
  var bridge: RCTBridge!  // this is synthesized

  @objc func addEvent(name: String, location: String, date: NSNumber, callback: (NSObject) -> () ) -> Void {
    // Date is ready to use!
    NSLog("Bridge: %@", self.bridge);
    NSLog("%@ %@ %@", name, location, date)
    let ret =  [
      "name": name,
      "location": location,
      "date" : date
      ]
    callback([ret])
    self.bridge.eventDispatcher.sendAppEventWithName("EventReminder", body: ret)
  }
  
  @objc func constantsToExport() -> NSObject {
    return [
      "x": 1,
      "y": 2,
      "z": "Arbitrary string"
    ]
  }
  
}