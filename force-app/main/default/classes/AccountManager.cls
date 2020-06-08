public with sharing class AccountManager {
   
    @AuraEnabled(cacheable=true)
    public static List<Account> getName(){
        
        return [SELECT Id, Name, Phone, Website FROM Account Limit 10];
    }
}
