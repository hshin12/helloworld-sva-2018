# Start with the line
print("Welcome! Here, you can see your future")
print("Please follow the guide")

#Define the user
name1=raw_input("Enter your name :")

pickLine="Hello"+name1+"!"
print(pickLine)

pickLine2=raw_input ("I'm the genie")

print '     ___       '
print '    _____      '
print '  _________    '
print '  \_     _/    '
print '   / 0 0 \ b   '
print '   \_\u/_//    '
print '    /   \/     '
print '   /\   /      '
print '     [ [       '
print '    _[ [_      '
print '               '

pickLine3=raw_input ("And I can see your future!")
pickline4=raw_input ("Please see the cards below.Press enter!")

print '   ___________   ___________   ___________   '
print '  |   _____   | |   _____   | |   _____   |  '
print '  |  _______  | |  _______  | |  _______  |  '
print '  |  \     /  | |  \     /  | |  \     /  |  '
print '  |  / 0 0 \  | |  / 0 0 \  | |  / 0 0 \  |  '
print '  |  \  u  /  | |  \  u  /  | |  \  u  /  |  '
print '  |           | |           | |           |  '
print '   -----------   -----------   -----------   '
print '        1             2             3        '

pickLine5=raw_input ("Please type the number of the card you want to pick")


if (pickLine5 == "1"):
      print "Great! You choose the Devil card!"
      print '   ___________  '
      print '  |           | '
      print '  |  ___/\__  | '
      print '  | | \   / | | '
      print '  | | 0   0 | | '
      print '  | |__] [__| | '
      print '  |           | '
      print '   -----------  '
      print '        1       '

      pickLine6 = raw_input ("Do you want to see what the Devil card means? ")
      pickLine7 = raw_input ("Tomorrow, you might bump into some trouble! Press enter for the hint.")
      pickLine8 = raw_input ("Bring red umbrella to avoid the trouble!")

elif (pickLine5 == "2") :
      print "Your choice is the cup!"
      print '   ___________  '
      print '  |           | '
      print '  |  _     _  | '
      print '  |   \___/   | '
      print '  |    \ /    | '
      print '  |   _] [_   | '
      print '  |           | '
      print '   -----------  '
      print '        2       '

      pickLine9 = raw_input ("So you wanna know what this means?")
      pickLine10 = raw_input ("During this week, you might come across with your future lover! Press to know more.")
      pickLine11 = raw_input ("However, this might turn into the nightmare! So be careful!")

elif (pickLine5 == "3") :
      print "You got the scale!"
      print '   ___________  '
      print '  |           | '
      print '  |    -^-    | '
      print '  |   / | \   | '
      print '  |  [  |  ]  | '
      print '  | --  |  -- | '
      print '  |    ---    | '
      print '   -----------  '
      print '        3       '

      pickLine12 = raw_input ("Press enter to know more!")
      pickLine13 = raw_input ("GO GET THE LOTTERY!!!")
      pickLine14 = raw_input ("If you want to win, type Yes! or No if you are not interested...")
      
      if (pickLine14 == "Yes") :
      	print "It's only $30...after 10sec, we will lead you to payment page :)"

      elif (pickLine14 == "No"):
      	print "Bummer.....you just lost the chance to get ritch"	

   
